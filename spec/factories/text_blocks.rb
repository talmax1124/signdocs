# == Schema Information
#
# Table name: text_blocks
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  styling    :json
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_text_blocks_on_user_id  (user_id)
#
FactoryBot.define do
  factory :text_block do
    
  end
end
