#!/bin/sh

JWT_TOKEN_URL='http://ui-nuance.stg-s.rmnkiba.local/presales/v1/generateJwtToken'

echo "please enter the client id "
read CLIENT_ID

JWT_TOKEN=$(curl -w '\n' -x 192.168.1.203:80 $JWT_TOKEN_URL \
--header 'Content-Type: application/json' \
--header 'clientId:'"$CLIENT_ID"'')

if [[ "$JWT_TOKEN" == *"Bearer"* ]]
then
  echo "please enter file type to upload (compatibility-check/campaign-data/campaign-annotation): "
  read FILE_TYPE

  case $FILE_TYPE in
    compatibility-check)
      UPLOAD_FILE_URL='http://ui-nuance.stg-s.rmnkiba.local/presales/v1/uploadFile'
      ;;

    campaign-data)
      UPLOAD_FILE_URL='http://ui-nuance.stg-s.rmnkiba.local/presales/v1/uploadCampaignData'
      ;;

    campaign-annotation)
      UPLOAD_FILE_URL='http://ui-nuance.stg-s.rmnkiba.local/presales/v1/uploadCampaignDataAnnotation'
      ;;

    *)
      echo "ERROR : Enter the correct file type"
      exit 1
      ;;

    esac

  echo "Provide the path of the file"
  read FILE_PATH
  echo "Please wait for the response"
  curl -w '\n' -x 192.168.1.203:80 $UPLOAD_FILE_URL \
  --header 'Content-Type: multipart/form-data' \
  --header 'Authorization: '"$JWT_TOKEN"'' \
  --form 'file=@'"$FILE_PATH"''
else
  echo "${JWT_TOKEN}"
  exit 1;
fi
