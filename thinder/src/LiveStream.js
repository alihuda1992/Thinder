import React from 'react';
import YoutubeLive from 'youtube-live-react';

const LiveStream = ()=> {
return (<div>
    <YoutubeLive
        iframeWidth={400}
        iframeHeight={200}
        maxResults={50}
        youtubeChannelId='UCpf9N4Witi0Qysk81BdOugw'
        googleApiKey='AIzaSyAj6VZtvyXKvXHiQCjDjrjaJVER0JYEa7M'/>
</div>
)}

export default LiveStream;