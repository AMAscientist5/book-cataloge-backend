## Features

- Look a vast collection of books.
- Search for books based on titles, authors, or genres.
- View detailed information about a specific book.
- Add new books to the catalog.
- Update existing book information.
- Delete books from the catalog.
- order some books
- User list
- user details
- Profile information

### Routes:

### before checking any api you should first create one data in database and then try to check with id what you will get after creating one

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/dcc91137-5a5e-48a2-93c5-dd02ea5ba6f5 (Single GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/dcc91137-5a5e-48a2-93c5-dd02ea5ba6f5 (DELETE)
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/3182270a-4fab-4b64-bdc6-855242f9e59b (Single GET)
- api/v1/categories/3182270a-4fab-4b64-bdc6-855242f9e59b (PATCH)
- api/v1/categories/3182270a-4fab-4b64-bdc6-855242f9e59b (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
