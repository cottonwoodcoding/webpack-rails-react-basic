class API::ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors, status: :unprocessable_entity }
    end
  end

  def update
    item = Item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: { message: 'Item deleted' }
  end

  private

  def item_params
    params.require(:item).permit(:name, :complete)
  end

end
