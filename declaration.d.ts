declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.mp4';
declare module '*.pdf';

declare module '*.module.css' {
    const content: Record<string, string>;
    export default content;
}