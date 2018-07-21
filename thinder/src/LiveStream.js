import React from 'react';
import YoutubeLive from 'youtube-live-react';

const LiveStream = ()=> {
return (<div>
    <YoutubeLive
        iframeWidth={400}
        iframeHeight={200}
        maxResults={50}
        youtubeChannelId='UCLA_DiR1FfKNvjuUpBHmylQ'
        googleApiKey='AIzaSyAj6VZtvyXKvXHiQCjDjrjaJVER0JYEa7M'/>
</div>
)}

export default LiveStream;