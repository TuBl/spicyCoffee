<?php

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Cartalyst\Stripe\Exception\CardErrorException;
class AppController extends Controller
{
    public function index(){
        return view('app');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */

    public function charge(Request $request){
        try {
            $customer = Stripe::customers()->create([
               'email' => $request->email,
                'name' => $request->name,
                'source' => $request->stripeToken
            ]);

            $charge = Stripe::charges()->create([
                'amount' => $request->total,
                'currency' => 'CAD',
                'customer' => $customer['id'],
//                'source' => $request->stripeToken,
                'description' => 'Description goes here',
//                'receipt_email' => $request->email,
                'metadata' => [
                    'data1' => 'metadata 1',
                    'data2' => 'metadata 2',
                    'data3' => 'metadata 3',
                ],
            ]);

            // save this info to your database

            // SUCCESSFUL
//            return back()->with('success_message', 'Thank you! Your payment has been accepted.');
            return redirect('/success');
        } catch (CardErrorException $e) {
            // save info to database for failed
            return redirect('/fail');

        }
    }
}
