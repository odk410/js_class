class Board < ActiveRecord::Base
  belongs_to :user
  has_many :likes
  has_many :comments

  def require_permission?(user)
    self.user.id == user.id
  end
end
