ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do

    columns do
      column do
        panel "Unpublished temples" do
          table_for Temple.where("is_published = false").order('created_at asc') do
            column("id")
            column("name")
            column("village")
            column("district")
            column("latitude")
            column("longitude")
            column("founded_at")
            column("mobile_number")
            column("Edit") {|temple| link_to('Edit', edit_admin_temple_url(temple)) }
          end
        end
      end
    end

    columns do
      column do
        panel "Upcoming Events" do
          table_for Event.where("start_date >= :d", d:Date.today).order('start_date asc').limit(10) do
            column("name")
            column("date")
            column("temple_id") {|temple| link_to(temple.name, admin_temple_path(temple)) }
          end
        end
      end
    end

  end # content
end
