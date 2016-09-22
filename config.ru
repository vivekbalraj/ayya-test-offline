# This file is used by Rack-based servers to start the application.

use Rack::Rewrite do
  rewrite %r{^(?!.*(api|admin|\.)).*$}, '/'
end

require ::File.expand_path('../config/environment', __FILE__)
run Rails.application
