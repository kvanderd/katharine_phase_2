class CreateProficiencies < ActiveRecord::Migration
  def change
    create_table :proficiencies do |t|
      t.integer   :proficiency, default: 0
      t.references :user
      t.references :skill
    end
  end
end


