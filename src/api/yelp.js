import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 1XmDrOiI47bqcl2APATfzOoddfiG3TqGgN8_n6D3UYplGQQfVKUw0Jtzff8w4tOPUkbEVNhryabvXD3f5YtldHWhLFbN6DvsbPvhqW2Qu7XaNr48QYDvVpUEKPqqX3Yx'
    }
})