from openai import OpenAI
api_key= "sk-proj-vUbzJ4KnwGp7AohPrBTST3BlbkFJrTTxQ6M3sk9VUaggFNJI"
client = OpenAI(api_key=api_key)
print(client.models.list().data)

# "C:\Users\ts-ebrima.hydara\Documents\SSL Certs\combined_cert 1.pem"
# "C:\Users\ts-ebrima.hydara\Documents\SSL Certs\combined_ssl_cert 1.pem"