ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do

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

    columns do
      column do
        panel "Recent Testimonials" do
          ul do
            Testimonial.last(5).map do |testimonial|
              li testimonial.name
              # link_to testimonial.name, admin_post_path(testimonial)
            end
          end
        end
      end
    end

  end # content
end
