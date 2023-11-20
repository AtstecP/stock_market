import requests 
# Привет Витя. Вот обобщенно то, о чем говорил Георгий :
# Надо видеть следующую статистику со стакана.
# 1. Общее количество продавцов и покупателей в стакане( раздельно)
# 2. Общее количество контрактов на продажу и покупку( раздельно)
# 3. Количество в процентах покупателей и продавцов в стакане( раздельно)
# 4. Средняя цена покупателей и продавцов ( раздельно)
# 5. Возможность определять сегмент в стакане с которого я могу снять данные указанные в пунктах 1,2,3 и 4.  
# Спасибо


# URL = 'https://api-testnet.bybit.com/v5/market/trades'
URL = 'https://api.kraken.com/0/public/Depth'
# params = {
#     'symbol':'BTCUSDT',
#     'limit':'800',
# }
params = {

    'pair':'XBTUSDT',
    'count':'500',
}
#[linear, inverse, option, spot]
def get_data():
    response = requests.get(URL,params=params)
    #response = requests.get('https://api-testnet.bybit.com/spot/v3/public/quote/depth/merged?symbol=BTCUSDT')

    #os.system('cls||clear')
    #df = pd.DataFrame(response.json()['result']['b']+['']+ response.json()['result']['a'], columns=['Price', 'amount'])
    #print(df)

    data_api = response.json()
    return data_api['result']['XBTUSDT']
        


if __name__=='__main__':
    print(get_data())

