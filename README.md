# El Rincon De Paty

## Description

Space created so that the Author can share his literary works and communicate with his followers, and also share videos and activities that promote education and learning for all ages.

## User Stories

**404:** As an admin/user they can see a 404 page if they try to reach a page that does not exist so that they know it doesnt exist.

- **Signup:** the user/admin can sign up in the platform so can goes to login.
- **Login:** the user/admincan login to the platform so goes to all features
- **Logout:** the user/admin can logout from the platform so no one else can use it
- **AudioBooks** User/Admin can choose the book to listen by youtube link
- **Books**user/admin can check all available books and can go directly to by by amazon by the link
- **Videos** user/admin can check the video to see directly in the page
- **Information** user can send a message directly to the author
- **main Admin** admin can create, edit and deleta books aalso read and delete messages.

## Client / Frontend

React Router Routes (React App)

public routes \*/}
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<SignUp />} />

      {/* private routes */}
      <Route
        path="/books"
        element={
          <IsPrivate>
            <Books />
          </IsPrivate>
        }
      />

      <Route
        path="/audiobooks"
        element={
          <IsPrivate>
            <AudioBooks />
          </IsPrivate>
        }
      />
      <Route
        path="/audiobooks/:id"
        element={
          <IsPrivate>
            <AudioBooksDetails />
          </IsPrivate>
        }
      />
      <Route
        path="/main"
        element={
          <IsPrivate>
            <Main />
          </IsPrivate>
        }
      />

      <Route
        path="/videos"
        element={
          <IsPrivate>
            <Videos />
          </IsPrivate>
        }
      />
      <Route
        path="/information"
        element={
          <IsPrivate>
            <Information />
          </IsPrivate>
        }
      />

      {/* private admin routes */}
      <Route
        path="/admin/main"
        element={
          <IsPrivateAdmin>
            <MainAdmin />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/messages"
        element={
          <IsPrivateAdmin>
            <AdminMessages />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/messages/:id"
        element={
          <IsPrivateAdmin>
            <MessageDetail />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/books"
        element={
          <IsPrivateAdmin>
            <AdminBooks />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/create"
        element={
          <IsPrivateAdmin>
            <AdminCreate />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/edit/:id"
        element={
          <IsPrivateAdmin>
            <AdminEdit />
          </IsPrivateAdmin>
        }
      />

      {/* error FE routes */}
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<NotFound />} />

### Components

IsPrivate
IsPrivateAdmin
Layout
Navbar

### Services

auth.Services
Books.Services
Config.Services
Messages.Services
Video.Services

### Server / Backend

BookModel

title: {
type: String,
required: true,
},
img: {
type: String,
required: true,
},
url: {
type: String,
},
purchaseLink: {
type: String,
},
description: {
type: String,
},
price: {
type: Number,
required: true,
},
type: {
type: String,
enum: ["libro", "audiolibro"],
},
adminId: {
type: Schema.Types.ObjectId,
ref: "user",
},

InformationModel

name: {
type: String,
required: true,
},
email: {
type: String,
required: true,
},
message: {
type: String,
},
userId: {
type: Schema.Types.ObjectId,
ref: "user",
},

UserModel

name: {
type: String,
required: true,
},
email: {
type: String,
unique: true,
required: true,
},
password: {
type: String,
required: true,
},
admin: {
type: Boolean,
default: false,
},

### Git

https://github.com/Sarahjanecc/rincon-de-paty-client.git
https://github.com/Sarahjanecc/rincon-de-paty-server.git

### Slides

https://rincon-de-paty.netlify.app/
