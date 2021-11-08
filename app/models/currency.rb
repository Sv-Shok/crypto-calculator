class Currency < ApplicationRecord
  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end  

  def current_price
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug='
    @request = HTTParty.get(url + self.slug, :headers => {'Accept' => 'application/json', 'X-CMC_PRO_API_KEY' => '744b5603-a5c8-417d-8519-aacd10552dd5'})
    response = JSON.parse(@request.body)["data"]["1"]["quote"]["USD"]["price"]
  end    
end
