Rails.application.routes.draw do
  get "/", controller:  "static_pages", action: :index
end
