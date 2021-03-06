defmodule SpotitApp.UserView do
  use SpotitApp.Web, :view

  alias SpotitApp.{UserView}

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user, token: token}) do
    %{data: render_one(user, UserView, "user_token.json", token: token)}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email,
      username: user.username}
  end

  def render("user_token.json", %{user: user, token: token}) do
    %{email: user.email,
      id: user.id,
      token: token,
      username: user.username}
  end
end
