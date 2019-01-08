# Travel
This is a travel app which you can search some view to play using React Native 

This is a Trael App demo written by Yongde Zhang(Warden John)/Boyu Zhao(Original Writer)/Shenglan Li(Original Writer)
For a new version of this app we added some new function in it.
A new Group of our member is Yongde Zhang(Warden John)/Luhang Liu (New Writer)/Haitao Liu(New Writer)

This app is build in React Native as font-end/Django as back-end/Scrapy framework for websipder

Usage:
1.Download the diractory,install it into your phone using command "react-native"
#if you are a IOS user ,using "react-native run-ios" or use "react-native run-android" if you are a android user , however,in 
this project , we just build it in android mode.Sorry for the ios user.

2.This application have to work with the help of a server.We don't provide a server.In the project,there is a globalcontent.js
which contains the ip-address of the server,changing this server-ip-address will let this application communicate with the server.

3.If you have a server,deploy the dir named "django" into your server,install Django envrinment , use "python manage.py runserver"
to start the server.However,this server work with MysqlDatabase,before you can use the application,you should go use command
"python manage.py syncdb" to creact the database and table

4.Use the WebSpider.Change the settings inside the websipder in order to connect to the mysql-database , it will insert the information
into the database.

5.Run the application.If your server is working ,you can monitor the status of connection in terminal.If you database isn't blank,
you can use the application now.

For more information,can contact with me Warden John.
E-mail:309766930@qq.com
