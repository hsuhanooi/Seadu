class RoomsController < ApplicationController
  def index
    @rooms = Room.all
  end
  
  def new
    @room = Room.new
  end
  
  def create
    @room = Room.new(params[:room])
    
    if @room.valid?
      @room.save
      redirect_to teachers_view_url(@room.id)
    else
      render :action => :new
    end
  end
  
  def list
    @rooms = Room.find(:all)
  end

  def show
    @room = Room.find(params[:id])
    @questions = @room.questions.highest_rated.page(params[:page])
    # @questions = @room.questions.most_recent.page(params[:page])
    @question = Question.new(room: @room)
    @page = params[:page]
    @sort_order = 'highest_rated'
    
    if mobile?
      render :template => "rooms/mobile"
    end
  end  
end