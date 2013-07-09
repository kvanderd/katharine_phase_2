get "/" do
	erb :index
end


get '/query' do
  user_recipe = params[:recipe]
  @show_recipe = Yummly.search(user_recipe)
  if @show_recipe.length > 0
    erb :recipe
  # Look in app/views/index.erb
  else
	@errors = "Sorry..no results. Try another search"
	erb :index
  end
end


get "/:recipe" do
  @recipe = Yummly.find(params[:recipe])
  erb :recipe_detail
end