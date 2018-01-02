Rails.application.routes.draw do
  resources :boards
  root 'boards#index'

  # sign in
  # 로그인 페이지
  get '/signin' => 'sessions#signin', as: :user_signin
  # 실제 로그인
  post '/signin' => 'sessions#user_signin'


  # sign up
  # 회원가입 페이지
  get '/signup' => 'sessions#signup', as: :user_signup
  # 실제 회원가입
  post '/signup' => 'sessions#user_signup'

  # sign out
  # 로그아웃
  delete '/signout' => 'sessions#signout', as: :user_signout

end
