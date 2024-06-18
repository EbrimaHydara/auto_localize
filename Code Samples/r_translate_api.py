import json
import requests
from requests.structures import CaseInsensitiveDict
 
class RTranslate:
    def __init__(self):
        self.token_url = "https://gateway-api.intra.rakuten-it.com/mliops/prod2/rtranslate/oauth2/token"
        self.token_headers = CaseInsensitiveDict()
        self.token_headers["accept"] = "application/json"
        self.token_headers["cache-control"] = "no-cache"
        self.token_headers["content-type"] = "application/x-www-form-urlencoded"
        self.token_data = "grant_type=client_credentials&client_id=rtranslate_v2&client_secret=rtranslate"
        self.TOKEN = requests.post(self.token_url, headers=self.token_headers, data=self.token_data).json()["access_token"]
        self.translation_headers = CaseInsensitiveDict()
        self.translation_headers["Content-Type"] = "application/json"
        self.translation_headers["Authorization"] = "Bearer " + self.TOKEN
     
    def translate(self, src, dest, sentence):
        api_url = "https://gateway-api.intra.rakuten-it.com/mliops/prod2/rtranslate/stg-bilingual/stg-rtranslate/3.2.2/api/translate"
        data = {}
        data["inference_id"] = "<replace-inference-id>" # replace with your inference-id here
        data["src"], data["dest"], data["text"] = src , dest, [sentence]
        data = json.dumps(data)
        translation_response = requests.post(api_url, headers=self.translation_headers, data=data)
        if translation_response.status_code == 200:
            return translation_response.text
        else:
            TOKEN = requests.post(self.token_url, headers=self.token_headers, data=self.token_data).json()["access_token"]  # WE FETCH THE TOKEN AGAIN
            self.translation_headers["Authorization"] = "Bearer " + TOKEN
            return requests.post(api_url, headers=self.translation_headers, data=data).text
 
def main():
    transobject = RTranslate()
    sent = "私の名前はアズミです。"
    print(sent, json.loads(transobject.translate("ja", "en", sent))["translation"][0])  # check supported language pair ids from API Details
 
if __name__ == "__main__":
    main()