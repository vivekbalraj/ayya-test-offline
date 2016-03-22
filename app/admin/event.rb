ActiveAdmin.register Event do

  permit_params :name, :description, :start_date, :end_date, :tamil_month, :tamil_date, :temple_id, :n, :day, :no_of_days

  filter :temple
  filter :start_date
  filter :tamil_month, :as => :select
  filter :tamil_date, :in => 1..32

  index do
    id_column
    column :name
    column :temple
    column :tamil_month
    column :n
    column :day
    column :no_of_days
    column :start_date
    column :end_date
    column :tamil_date
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Event" do
      f.input :name
      f.input :temple
      f.input :tamil_month, :as => :select, :collection => ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"]
      f.input :n
      f.input :day, :as => :select, :collection => ["ஞாயிற்றுக் கிழமை", "திங்கட் கிழமை", "செவ்வாய்க் கிழமை", "புதன் கிழமை", "வியாழக் கிழமை", "வெள்ளிக் கிழமை", "சனிக் கிழமை"]
      f.input :no_of_days
      f.input :tamil_date, :in => 1..32
      f.input :start_date, as: :string
      f.input :end_date, as: :string
      f.input :description
    end
    f.actions
  end

end
