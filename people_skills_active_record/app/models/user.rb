class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :skills, through: :proficiencies
  has_many :proficiencies
  # getter method
  def proficiency_for(skill)
    prof = Proficiency.find_by_skill_id(skill)
    prof.proficiency
  end

  #setter method
  def set_proficiency_for(skill, num)
    Proficiency.where(:user_id => self.id, :skill_id => skill.id).first.proficiency
  end

end


 