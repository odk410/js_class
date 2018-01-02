class SessionsController < ApplicationController
  # 회원가입 페이지
  def signup

  end

  #실제 회원가입이 이루어지는 곳
  def user_signup
    user = User.new(email: params[:email],
                    password: params[:password],
                    password_confirmation: params[:password_confirmation])

    #
    if user.save
      puts "done"
      redirect_to '/signin', notice: "회원가입이 완료!"
    else
      puts "error"
      redirect_to '/signup', notice: "잘못된 비밀번호 입니다."
    end
  end

  # 로그인 페이지
  def signin

  end

  # 로그인이 실제로 이루어지는 곳
  def user_signin
    user = User.find_by(email: params[:email])

    # user가 존재하고, parameter로 넘어온 비밀번호가 일치하다면
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/', notice: "로그인에 성공했습니다."
    else
      redirect_to '/signin', notice: "이메일이 없거나, 비밀번호가 틀렸습니다."
    end
  end

  #로그아웃
  def signout
    # session.out과 동일한 역할 user_id만 session에서 날려준다.
    session.delete(:user_id)
    redirect_to '/', notice: "로그아웃 성공!"
  end
end
