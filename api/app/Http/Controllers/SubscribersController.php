<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Subscriber;

class SubscribersController extends Controller
{
    public function subscribeToList(Request $request) {

        $email = $request->email;
        
        $subscriber = new Subscriber;
        $subscriber->email = $email;
        $subscriber->save();
        
        $client = new Client();

        $client->request('POST', 
            'https://api.moosend.com/v3/subscribers/aebbbf49-46f7-4431-a521-ae7683e5ca7a/subscribe.json?apikey=c91c10a6-f3ae-4367-89c0-01852806c0f3',
             ['json' => ['Email' => $email]]);

        
    }
}
