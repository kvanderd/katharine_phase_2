class Skill < ActiveRecord::Base
  # Remember to create a migration!
  has_many :users, through: :proficiencies
  has_many :proficiencies

   validates :name, uniqueness: true

  def user_with_proficiency(proficiency)
    skill_this = self.id
    prof = Proficiency.where(skill_id: skill_this, proficiency: proficiency)
   end
   
end
