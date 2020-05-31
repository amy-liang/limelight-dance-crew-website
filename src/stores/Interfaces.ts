export interface IImage {
    url?: string;
    link?: string;
    title?: string;
    subtitle?: string;
}

export interface IVideo {
    title?: string;
    published_date?: string;
    thumbnail_url?: string;
    url?: string;
}

export interface IGlobalStore {
    atScrollTop: boolean;
}

export interface IYoutubeStore {
    videos: IVideo[];
    fetchYoutubeVideos: () => void;
    getVideosByIndex: (startIndex: number, endIndex: number) => IVideo[];
}
