require 'mars/info.rb'
class WelcomeController < ApplicationController

  def index
    @weather_report = Mars.new
  end

end
