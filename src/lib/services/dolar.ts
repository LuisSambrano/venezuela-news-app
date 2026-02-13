import { Currency } from "@/lib/types/currency";
import { logger } from "@/lib/logger";

interface ApiCurrency {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export const DolarService = {
  async getAll(): Promise<Currency[]> {
    try {
      // Add cache busting or revalidation if needed, but for now standard fetch
      const response = await fetch("https://dolarapi.com/v1/dolares", {
        next: { revalidate: 60 } // Next.js specific cache revalidation (60s)
      });
      
      if (!response.ok) throw new Error("Failed to fetch rates");

      const data: ApiCurrency[] = await response.json();

      return data.map((item) => ({
        code: item.casa,
        name: item.nombre,
        buy: item.compra,
        sell: item.venta,
        timestamp: item.fechaActualizacion,
        // Simulation of variation since API v1 doesn't provide it
        // In prod, this should be calculated against a stored previous value
        variation: 0, 
      }));
    } catch (error) {
      logger.error("DolarService Error", { error });
      return [];
    }
  },
};
