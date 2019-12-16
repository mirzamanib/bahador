# frozen_string_literal: true

class PagesController < ApplicationController
  layout "pages"

  def landing
    @landing_props = { name: "Landing" }
  end
end
