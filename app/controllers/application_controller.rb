class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :user_signed_in?

  def current_user
    # 현재 접속한 유저
    # current_user가 비어 있다면 뒤를 실행하고 비어있지 않다면 그대로 진행한다.
    @current_user ||= User.find(session[:user_id])
  end

  # ?로 정의 되어 있으면 Boolean으로 return된다.
  def user_signed_in?
    # 유저가 로그인 했는지 여부(boolean)
    # session[:user_id] 비어있으면 >> 로그인 안한거 >> false
    # session[:user_id] 채워져있으면 >> 로그인 한거 >> true
    !session[:user_id].nil?
  end

  # !(bang) 내용물을 변화시킬수 있는 메소드에 붙여줌
  # element.upacse! => element 자체가 변화함
  # element2 = element.upcase => return 값이 변화함
  def authenticate_user!
    #유저가 로그인 했다면 진행
    #유저가 로그인 하지 않았다면 로그인 페이지로
    if session[:user_id].nil?
      redirect_to '/signin', notice: '로그인이 필요합니다.'
    end
  end
end
