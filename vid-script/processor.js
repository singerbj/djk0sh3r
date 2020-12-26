const path = new Path2D(
    'm95 50 m26.796 4.3474-9.4344 67.086c15.592-4.7881 31.184-9.5762 46.776-14.364 2.2387-15.861 4.4775-31.722 6.7162-47.583-2.2241-2.8902-4.5838-6.1579-8.6316-5.1379-11.809-2.389e-4 -23.617-4.777e-4 -35.426-7.166e-4zm74.76 0c-1.7738 12.564-3.5475 25.128-5.3213 37.693h-11.215c0.3588-2.5196 0.71759-5.0392 1.0764-7.5588h-14.907c-1.0656 7.5293-2.1311 15.059-3.1967 22.588h40.999c2.4166-17.574 4.8333-35.148 7.2499-52.722-4.8951-8.89e-5 -9.7903-1.779e-4 -14.685-2.669e-4zm18.318 0-7.2312 52.722h14.863c0.74354-5.4708 1.4871-10.942 2.2306-16.413 5.1838 5.4937 9.3378 12.272 15.183 16.961 10.698 4.6054 21.397 9.2107 32.095 13.816-11.548-13.558-23.097-27.117-34.645-40.675 9.9147-8.8036 19.829-17.607 29.744-26.411h-21.036c-6.2194 5.5269-12.439 11.054-18.658 16.581-0.0415-5.1371 3.2407-13.177 1.2144-16.581h-13.759zm-80.34 14.919h15.069c-1.2503 8.9009-2.5024 17.802-3.7537 26.702-5.2231 1.3864-10.446 2.7729-15.669 4.1593 1.4514-10.287 2.9028-20.574 4.3542-30.862z'
);

const processor = {
    recordedChunks: [],
    timerCallback() {
        if (this.video.paused || this.video.ended) {
            return;
        }
        this.computeFrame();
        const self = this;
        setTimeout(() => {
            self.timerCallback();
        }, 0);
    },

    download: () => {
        const blob = new Blob(this.recordedChunks, {
            type: 'video/webm',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = url;
        a.download = 'test.webm';
        a.click();
        window.URL.revokeObjectURL(url);
    },

    doLoad() {
        this.video = document.getElementById('video');
        this.c1 = document.getElementById('c1');
        this.ctx1 = this.c1.getContext('2d');
        const self = this;
        this.video.addEventListener(
            'play',
            () => {
                self.width = self.video.videoWidth;
                self.height = self.video.videoHeight;
                self.timerCallback();
            },
            false
        );
        this.drawLogo();

        const stream = this.c1.captureStream(60);
        const recorder = new MediaRecorder(stream);
        recorder.addEventListener('dataavailable', (e) => {
            console.log('dataavailable');
            if (e.data.size > 0) {
                this.recordedChunks.push(e.data);
                console.log(this.recordedChunks);
                this.download();
            } else {
                console.log('data size not bigger than 0');
            }
        });
    },

    drawLogo() {
        this.ctx1.moveTo(100, 100);
        this.ctx1.fillStyle = '#FAFAFA';
        this.ctx1.scale(5, 5);
        this.ctx1.fill(path);
        this.ctx1.scale(1 / 5, 1 / 5);
        this.ctx1.moveTo(0, 0);
    },

    computeFrame() {
        this.ctx1.drawImage(this.video, 0, 840, 1920, 1080);
    },
};

document.addEventListener('DOMContentLoaded', () => {
    processor.doLoad();
});
