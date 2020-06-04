import { action, observable } from "mobx";
import { injectable } from "inversify";
import { IVideo, IYoutubeStore } from "./Interfaces";
import {API_KEY} from "./APIKey";
import {backupYoutubeVideos} from "./BackupCache";

const MAX_VIDEOS = 12;

@injectable()
export class YoutubeStore implements IYoutubeStore {
    @observable
    videos: IVideo[] = [];

    @action
    fetchYoutubeVideos = async () => {
        if (this.videos.length > 0) {
            return;
        }
        const localStorageVideos = localStorage.getItem('limelight_youtube_videos');
        if (localStorageVideos != null) {
            this.parseVideosFromLocalStorage(localStorageVideos);
            return;
        }

        const newVideos: IVideo[] = [];
        let responseBody = await this.getYoutubeVideosRequest();
        if (responseBody?.data == null) {
            return;
        }
        let response = responseBody.data;
        let i = 0;
        let nextPageToken = "";

        while (newVideos.length < MAX_VIDEOS) {
            nextPageToken = response.nextPageToken;
            const videoResponse = response.items[i];
            const video = {
                title: videoResponse.snippet.title,
                published_date: videoResponse.snippet.publishedAt,
                thumbnail_url: videoResponse.snippet.thumbnails.high.url,
                url:
                    "https://www.youtube.com/watch?v=" +
                    videoResponse.id.videoId
            };
            newVideos.push(video);
            if (i + 1 === parseInt(response.pageInfo.resultsPerPage, 10)) {
                let responseBody = await this.getYoutubeVideosRequest(nextPageToken);
                if (responseBody?.data == null) {
                    break;
                }
                response = responseBody.data;
                i = 0;
            }
            i++;
        }

        this.videos = newVideos;
        localStorage.setItem("limelight_youtube_videos", newVideos.map(video => JSON.stringify(video)).toString());
    };

    getVideosByIndex = (startIndex: number, endIndex: number): IVideo[] => {
        if (startIndex >= 0 && endIndex <= this.videos.length + 1) {
            return this.videos.slice(startIndex, endIndex);
        }
        return [];
    };

    private getYoutubeVideosRequest = async (pageToken?: string) => {
        const axios = require("axios").default;
        try {
            return await axios.get(
                "https://www.googleapis.com/youtube/v3/search",
                {
                    params: {
                        key: API_KEY,
                        part: "snippet",
                        type: "video",
                        channelId: "UC40GdqVnIsD23o_5fYvy3dQ",
                        order: "date",
                        pageToken: pageToken ? pageToken : null
                    }
                }
            );
        } catch (error) {
            console.error(error);
            this.videos = backupYoutubeVideos;
        }
    };

    @action
    private parseVideosFromLocalStorage = (localStorageVideos: string) => {
        const parsedVideos: IVideo[] = localStorageVideos.split("},")
            .map((str, index) => {
                if (index !== MAX_VIDEOS - 1) str = str.concat("}")
                return JSON.parse(str)
            });
        this.videos = parsedVideos;
    }
}
