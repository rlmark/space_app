class Mars
  attr_accessor :earth_date, :min_temp, :max_temp, :atmosphere, :sol, :ls, :days
  include HTTParty

  def initialize
    response = HTTParty.get('http://marsweather.ingenology.com/v1/latest/')
    hash = response.parsed_response

    @earth_date = hash['report']['terrestrial_date']
    @min_temp = hash['report']['min_temp_fahrenheit']
    @max_temp = hash['report']['max_temp_fahrenheit']
    @atmosphere = hash['report']['atmo_opacity']
    @sol = hash['report']['sol']
    days = (@sol * 1.0274912510)
    @days = days.to_i
    @ls = hash['report']['ls']
  end

end
