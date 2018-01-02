class User < ActiveRecord::Base
  # 암호화된 비번을 가지고 있습니다.
  has_secure_password
  has_many :boards
end
