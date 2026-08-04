#!/bin/bash
# Verifica si madeinlatinamerica.com ya apunta a Vercel.
# Uso: ./check-dominio.sh
echo "=== A records de madeinlatinamerica.com ==="
CURRENT=$(dig +short madeinlatinamerica.com A | sort | tr '\n' ' ')
echo "Actual:   $CURRENT"
echo "Esperado: 216.150.1.1 216.150.16.1"
echo ""
if echo "$CURRENT" | grep -q "216.150"; then
  echo "OK - El DNS ya apunta a Vercel."
  echo -n "HTTPS: "; curl -s -o /dev/null -w "HTTP %{http_code}\n" https://madeinlatinamerica.com/
else
  echo "PENDIENTE - Todavia apunta al parking de NameBright."
  echo "Puede tardar hasta 24h en propagar despues del cambio."
fi
