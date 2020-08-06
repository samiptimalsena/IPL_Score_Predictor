from flask import Flask,request,jsonify
from flask_cors import CORS
import pickle
import numpy as np

model=pickle.load(open('ipl_score_predictor.pkl','rb'))
app=Flask(__name__)
CORS(app)

@app.route("/predict",methods=['POST'])
def predict():
    data=request.json
    batting_team_arr=np.zeros(7)
    bowling_team_arr=np.zeros(7)
    venue_arr=np.zeros(30)

    batting_team=data['batting_team']
    if batting_team=='Delhi Daredevils':
        batting_team_arr[0]=1
    elif batting_team=='Kings XI Punjab':
        batting_team_arr[1]=1
    elif batting_team=='Kolkata Knight Riders':
        batting_team_arr[2]=1
    elif batting_team=='Mumbai Indians':
        batting_team_arr[3]=1
    elif batting_team=='Rajasthan Royals':
        batting_team_arr[4]=1
    elif batting_team=='Royal Challengers Bangalore':
        batting_team_arr[5]=1
    elif batting_team=='Sunrisers Hyderabad':
        batting_team_arr[6]=1

    bowling_team=data['bowling_team']
    if bowling_team=='Delhi Daredevils':
        bowling_team_arr[0]=1
    elif bowling_team=='Kings XI Punjab':
        bowling_team_arr[1]=1
    elif bowling_team=='Kolkata Knight Riders':
        bowling_team_arr[2]=1
    elif bowling_team=='Mumbai Indians':
        bowling_team_arr[3]=1
    elif bowling_team=='Rajasthan Royals':
        bowling_team_arr[4]=1
    elif bowling_team=='Royal Challengers Bangalore':
        bowling_team_arr[5]=1
    elif bowling_team=='Sunrisers Hyderabad':
        bowling_team_arr[6]=1

    venue=data['venue']
    if venue=="Brabourne Stadium":
        venue_arr[0]=1
    elif venue=="Buffalo Park":
        venue_arr[1]=1
    elif venue=="De Beers Diamond Oval":
        venue_arr[2]=1
    elif venue=="Dr DY Patil Sports Academy":
        venue_arr[3]=1
    elif venue=="Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium":
        venue_arr[4]=1
    elif venue=="Dubai International Cricket Stadium":
        venue_arr[5]=1
    elif venue=="Eden Gardens":
        venue_arr[6]=1
    elif venue=="Feroz Shah Kotla":
        venue_arr[7]=1
    elif venue=="Himachal Pradesh Cricket Association Stadium":
        venue_arr[8]=1
    elif venue=="Holkar Cricket Stadium":
        venue_arr[9]=1
    elif venue=="JSCA International Stadium Complex":
        venue_arr[10]=1
    elif venue=="Kingsmead":
        venue_arr[11]=1
    elif venue=="M Chinnaswamy Stadium":
        venue_arr[12]=1
    elif venue=="MA Chidambaram Stadium, Chepauk":
        venue_arr[13]=1
    elif venue=="Maharashtra Cricket Association Stadium":
        venue_arr[14]=1
    elif venue=="New Wanderers Stadium":
        venue_arr[15]=1
    elif venue=="Newlands":
        venue_arr[16]=1
    elif venue=="OUTsurance Oval":
        venue_arr[17]=1
    elif venue=="Punjab Cricket Association IS Bindra Stadium, Mohali":
        venue_arr[18]=1
    elif venue=="Punjab Cricket Association Stadium, Mohali":
        venue_arr[19]=1
    elif venue=="Rajiv Gandhi International Stadium, Uppal":
        venue_arr[20]=1
    elif venue=="Sardar Patel Stadium, Motera":
        venue_arr[21]=1
    elif venue=="Sawai Mansingh Stadium":
        venue_arr[22]=1
    elif venue=="Shaheed Veer Narayan Singh International Stadium":
        venue_arr[23]=1
    elif venue=="Sharjah Cricket Stadium":
        venue_arr[24]=1
    elif venue=="Sheikh Zayed Stadium":
        venue_arr[25]=1
    elif venue=="St George's Park":
        venue_arr[26]=1
    elif venue=="Subrata Roy Sahara Stadium":
        venue_arr[27]=1
    elif venue=="SuperSport Park":
        venue_arr[28]=1
    elif venue=="Wankhede Stadium":
        venue_arr[29]=1

    runs=np.array([int(data['runs'])])
    wickets=np.array([int(data['wickets'])])
    overs=np.array([float(data['overs'])])
    runs_in_5=np.array([int(data['run5'])])
    wickets_in_5=np.array([int(data['wicket5'])])
        
    data=np.concatenate([runs,wickets,overs,runs_in_5,wickets_in_5,venue_arr,batting_team_arr,bowling_team_arr])
    prediction=int(model.predict([data])[0])

    response=jsonify({"prediction":prediction})
    #response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__=="__main__":
    app.run(debug=True,host='localhost',port=4257)