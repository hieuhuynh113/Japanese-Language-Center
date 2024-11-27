declare module 'react-image-gallery' {
  export interface ReactImageGalleryItem {
    original: string;
    thumbnail?: string;
    originalClass?: string;
    thumbnailClass?: string;
    originalAlt?: string;
    thumbnailAlt?: string;
    originalTitle?: string;
    thumbnailTitle?: string;
    thumbnailLabel?: string;
    description?: string;
    imageSet?: ImageSet[];
    srcSet?: string;
    sizes?: string;
    bulletClass?: string;
    originalHeight?: string;
    originalWidth?: string;
    thumbnailHeight?: string;
    thumbnailWidth?: string;
  }

  export interface ImageSet {
    srcSet: string;
    media: string;
  }

  export interface ReactImageGalleryProps {
    items: ReactImageGalleryItem[];
    showNav?: boolean;
    autoPlay?: boolean;
    lazyLoad?: boolean;
    infinite?: boolean;
    showIndex?: boolean;
    showBullets?: boolean;
    showThumbnails?: boolean;
    showPlayButton?: boolean;
    showFullscreenButton?: boolean;
    disableThumbnailScroll?: boolean;
    disableKeyDown?: boolean;
    disableSwipe?: boolean;
    useBrowserFullscreen?: boolean;
    preventDefaultThumbnailClick?: boolean;
    thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left';
    startIndex?: number;
    slideDuration?: number;
    slideInterval?: number;
    slideOnThumbnailOver?: boolean;
    swipeThreshold?: number;
    swipingTransitionDuration?: number;
    onSlide?: (currentIndex: number) => void;
    onScreenChange?: (fullScreenElement: Element) => void;
    onPause?: (currentIndex: number) => void;
    onPlay?: (currentIndex: number) => void;
    onClick?: (event: React.MouseEvent, index: number) => void;
    onThumbnailClick?: (event: React.MouseEvent, index: number) => void;
    onThumbnailError?: (event: React.MouseEvent) => void;
    onImageError?: (event: React.MouseEvent) => void;
    renderCustomControls?: () => React.ReactNode;
    renderLeftNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
    renderRightNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
    renderPlayPauseButton?: (onClick: () => void, isPlaying: boolean) => React.ReactNode;
    renderFullscreenButton?: (onClick: () => void, isFullscreen: boolean) => React.ReactNode;
    renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
    renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode;
    additionalClass?: string;
    useTranslate3D?: boolean;
    isRTL?: boolean;
    stopPropagation?: boolean;
  }

  export default class ReactImageGallery extends React.Component<ReactImageGalleryProps> {
    play(): void;
    pause(): void;
    fullScreen(): void;
    exitFullScreen(): void;
    slideToIndex(index: number): void;
    getCurrentIndex(): number;
  }
}
