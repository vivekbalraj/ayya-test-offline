ActiveAdmin.register Temple do

  permit_params :name, :temple_type, :information, :village, :latitude, :longitude, :district, :founded_at, :contact_person, :country, :state, :taluk, :pincode, :street_address, :img1, :img2, :img3, :is_primary_thangal, :is_book_read, :is_published, :book_month, :mobile_number, :priest_name, :facebook_page_url, {:car_ids => []}, :contact_email

  filter :temple_type, :as => :select
  filter :district, :as => :select
  filter :taluk, :as => :select
  filter :is_primary_thangal
  filter :is_book_read
  filter :is_published

  scope :no_info
  scope :no_coords
  scope :no_image
  scope :all_data

  index do
    id_column
    column :name
    column :temple_type
    column :village
    column :district
    column :latitude
    column :longitude
    column :founded_at
    column :is_published
    column :mobile_number
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs "Temple Details" do
      f.input :name
      f.input :temple_type, :as => :select, :collection => ["Pathi", "Thangal"], :include_blank => false
      f.input :founded_at
      f.input :is_published
      f.input :is_primary_thangal
      f.input :book_month, :as => :select, :collection => ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"], :include_blank => true
      f.input :priest_name
      f.input :facebook_page_url
      f.input :cars, :as => :check_boxes
      f.input :information, :input_html => {:rows => 9}
    end

    f.inputs "Temple Address" do
      f.input :village
      f.input :taluk
      f.input :district, :as => :select, :collection => ["அரியலூர்", "சென்னை", "கோயம்புத்தூர்", "கடலூர்", "தர்மபுரி", "திண்டுக்கல்", "ஈரோடு", "காஞ்சிபுரம்", "கன்னியாகுமரி", "கரூர்", "கிருஷ்ணகிரி", "மதுரை", "நாகப்பட்டினம்", "நாமக்கல்", "பெரம்பலூர்", "புதுக்கோட்டை", "இராமநாதபுரம்", "சேலம்", "சிவகங்கை", "தஞ்சாவூர்", "தேனி", "நீலகிரி", "திருநெல்வேலி", "திருவள்ளூர்", "திருவண்ணாமலை", "திருவாரூர்", "தூத்துக்குடி", "திருச்சிராப்பள்ளி", "திருப்பூர்", "வேலூர்", "விழுப்புரம்", "விருதுநகர்"], :include_blank => false
      f.input :state, :as => :select, :collection => ["தமிழ்நாடு"], :include_blank => false
      f.input :country, :as => :select, :collection => ["இந்தியா"], :include_blank => false
      f.input :latitude
      f.input :longitude
      f.input :pincode
      f.input :street_address, :input_html => {:rows => 5}
    end

    f.inputs "Contact Details" do
      f.input :contact_person
      f.input :mobile_number, :as => :phone
      f.input :contact_email, :as => :email
    end

    f.inputs "Images" do
      f.input :img1, :as => :file
      f.input :img2, :as => :file
      f.input :img3, :as => :file
    end

    f.inputs "Events" do
      f.has_many :events do |event|
        event.input :name
        event.input :tamil_month, :as => :select, :collection => ["சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி", "தை", "மாசி", "பங்குனி"]
        event.input :n
        event.input :day, :as => :select, :collection => ["ஞாயிற்றுக் கிழமை", "திங்கட் கிழமை", "செவ்வாய்க் கிழமை", "புதன் கிழமை", "வியாழக் கிழமை", "வெள்ளிக் கிழமை", "சனிக் கிழமை"]
        event.input :no_of_days
        event.input :tamil_date, :in => 1..32
        event.input :start_date, as: :string
        event.input :end_date, as: :string
        event.input :description
      end
    end
    f.actions
  end

end
