get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do |id|
  @event = Event.find(id)
  erb :event_show
end

get '/events/new' do
 erb :event_form
end

post '/events/create' do
	@event = Event.create(params[:event])
   if @event.errors.full_messages.length > 0
    @errors = @event.errors.full_messages
    erb :event_form
  else
  redirect "/"
  end
end
