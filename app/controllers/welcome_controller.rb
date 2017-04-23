class WelcomeController < ApplicationController
  
  def index
    session[:clicked] = nil
  end
  
  def ping
    
    if session[:clicked] == params[:id]
      session[:clicked] = nil
    else
      session[:clicked] = params[:id]
    end
    
    @response = {
      "clicked" => session[:clicked]
    }
    
    render json: @response and return
    
  end
  
end
