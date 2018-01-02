json.extract! board, :id, :user, :title, :content, :created_at, :updated_at
json.url board_url(board, format: :json)
