defmodule ForumWeb.PageController do
  use ForumWeb, :controller

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
  end


  def users(conn, _params) do
    IO.puts("Users function hit!")
    users = [
      %{id: 1, name: "Teja", email: "tchennur@email.com"},
      %{id: 2, name: "Akash", email: "amathi@email.com"}
    ]
    json(conn, %{users: users})
  end

  def index(conn, _params) do
    conn
    |> put_resp_content_type("text/html")
    |> send_file(200, Path.join(["priv", "static", "frontend", "index.html"]))
  end

end
