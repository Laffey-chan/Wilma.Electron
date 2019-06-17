# nodeWilma
This is a node application, that gets information and schedule from wilma

###This is not an official package

##Installation
```
> npm i wilma
```

###Usage

To use all of the functions you have to get SID with LoginWilma()

```js
wilma = require('wilma');
SID = LoginWilma('Username', 'Password');
```

##Functions

###LoginWilma()
Gets a SID (session ID) from wilma API. This is used to authenticate your self elsewhere 
```js
wilma = require('wilma');
SID = LoginWilma('Username', 'Password');
```

###GetMessages
Gets a list of all receaved messages in sorting by latest
```js

wilma = require('wilma');

messageList = await GetMessages(/*SID*/);

```

###GetMessageBody()
Gets all of the info of a message

```js

wilma = require('wilma');

message = await GetMessageBody(/*messageID*/,/*SID*/)

```

###GetSchedule
Gets current months schedule

```js

wilma = require('wilma');

schedule = await GetSchedule(/*SID*/);

```

##Examples

```js
wilma = require('wilma');

async function RUN(){
    //Login
    SID = await LoginWilma('Username', 'Password');
    //Get messages
    messageList = await GetMessages(SID);
    //Get first message
    message = await GetMessageBody(messageList[0].Id, SID);G    //Print the body of the message
    console.log(message.mainMessageBody);
}
RUN();
```

##Contribute
[Github](https://github.com/jaakop/nodeWilma)
