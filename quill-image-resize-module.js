/* Quill Image Resize Module for Example Project */

class QuillImageResizeModule {
    constructor(quill, options) {
        this.quill = quill;
        this.options = options;
        this.registerEvents();
    }

    registerEvents() {
        this.quill.getModule('image-resize').addHandler('image-resize', this.handleImageResize.bind(this));
    }

    handleImageResize(img) {
        // Implement your image resizing logic here
    }
}

// Register the module with Quill
Quill.register('image-resize', QuillImageResizeModule);