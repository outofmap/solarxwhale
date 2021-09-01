import PhotoSwipeLightbox from '/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/node_modules/photoswipe/dist/photoswipe.esm.js';

function Gallery(config) {
    const lightbox = new PhotoSwipeLightbox({
        gallerySelector: '#ourGallery',
        childSelector: 'a',
        initialZoomLevel: 'fit',
        secondaryZoomLevel: 'fit',
        maxZoomLevel: 'fit',
        pswpModule: PhotoSwipe
    });
    lightbox.init();
}

export default Gallery
