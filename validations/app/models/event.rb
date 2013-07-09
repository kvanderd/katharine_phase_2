class Event < ActiveRecord::Base
  validates_uniqueness_of :title 
  validates :organizer_name, :presence => true 
  validates :organizer_email, :format => { :with => /.*(@).*/,
  	:message => ":Please Make sure this is a valid email" }  
 

  validate :date_is_valid
  validate :date_in_future

  def date_is_valid
    if date.class != Date
      errors.add(:date, "must be valid")
    end
  end

  def date_in_future
    if date.class == Date && !(date.future?)
      errors.add(:date, "can't be in the past")
    end
  end
end
