import { action, observable } from "mobx";
import { injectable } from "inversify";
import { IVideo, IYoutubeStore } from "./Interfaces";

const MAX_VIDEOS = 12;

@injectable()
export class YoutubeStore implements IYoutubeStore {
    @observable
    videos: IVideo[] = [];

    @action
    fetchYoutubeVideos = async () => {
        const newVideos: IVideo[] = [];
        let response = (await this.getYoutubeVideosRequest()).data;
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
                response = (await this.getYoutubeVideosRequest(nextPageToken))
                    .data;
                i = 0;
            }
            i++;
        }

        this.videos = newVideos;
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
                        key: "AIzaSyCeYtU_q_3wdMEkpmZ3D22iOeFCzf_nrVQ",
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
        }
    };
}
