# International-office-website-for-TH-Deggendorf
International office website for TH Deggendorf

Description:
1. Frontend:
The ng serve in command line will open the home page of the International office website.
Following pages are created in the IO app:

>>Login and Register

>>Events page
The upcoming events in the university can be viewed by the user in the Events page where each events when clicked will display the event in detail.


>>News page
The current news and headlines can be viewed by the user in the News page.


>>Navigation
The elaborate details of the THD is shown along with the brief view of other campuses.


>>Internal Information
The Internal Information pages consists of 5 sections: Mensa, Rooms, Find Professor and Find Staff. Mensa and Rooms can only be accessed when a user or admin is logged in.

>Mensa: A logged in user can view the university cafeteria menus, prices and meal timings in this page.
>Rooms: The registered user can view the rooms available if he/she wants to book a room for an event.
>Find Professor: Registered and un-registered users can find the professors and their contact details to arrange a meeting with them regarding their studies.
>Find Staff: The users can find the administrative staff and their contact details to get guidance and help for the academics.


>>International
Both registered and unregistered users can view the International page. It consists of information regarding the courses offered and its details to the International students who wish to study in DIT. The users can choose the section they need information on -
>Exchange students
>International students (regular)
>Study abroad (doing a semester abroad)
>Career Services (guidance and career advice)
>AWP & Language courses (Various language courses offered in DIT)


Select Language
The user should be able to switch between English and German by clicking the option in the tool bar (near Login)


The data for users and rooms are taken from the backend server - mongodb. Other internal and international information is given in the json files.

2. Backend
The backend project is updated in a different repository to avoid errors and for a better understanding and performance.
The backend server is set uo using Node.js + Express + MongoDB.
The api server which we created is: http://localhost:3000/

MongoDB
Created collections are called user and room in the server and pushed the collections using postman.

The api for users : http://localhost:3000/api/user
The api for room : http://localhost:3000/api/room

The command npm start is given in the terminal to start the backend.
