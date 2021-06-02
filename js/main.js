var music_project = new Vue({
    el: "#player",
    data: {
        query: "",
        musicList: [],
        musicUrl: "",
        musicImg: "",
        hotComments: [],
        isplaying: false,
        music_vi: "",
        isshow:false
    },
    methods: {
        searchMusic: function () {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    console.log(response);
                    that.musicList = response.data.result.songs;
                },
                    function (err) {

                    })
        },
        playMusic: function (musicId) {
            //console.log(musicId);
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + musicId)
                .then(function (response) {
                    //console.log(response);
                    //console.log(response.data.data[0].url);
                    that.musicUrl = response.data.data[0].url;


                }, function (err) {

                })

            axios.get("https://autumnfish.cn/song/detail?ids=" + musicId)
                .then(function (response) {
                    //console.log(response);
                    that.musicImg = response.data.songs[0].al.picUrl;

                },
                    function (err) {

                    })

            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId)
                .then(function (response) {
                    console.log(response);
                    that.hotComments = response.data.hotComments;
                },
                    function () {

                    })
        },

        play: function () {
            this.isplaying = true;
        },

        pause: function () {
            this.isplaying = false;
        },

        vi_open: function (mvId) {
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + mvId).then(
                function (response) {
                    // console.log(response);
                    //console.log(response.data.data.url);
                    that.isshow = true;
                    that.music_vi = response.data.data.url;
                },
                function (err) {alert("cuowu") })
        },

        hide: function(){
            this.isshow = false;
            this.music_vi = "";
        }


    }
})